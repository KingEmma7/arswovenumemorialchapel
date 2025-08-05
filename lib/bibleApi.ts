/**
 * Fetch a verse or passage text from api.bible with official
 * Akan and Ewe translations using authenticated API access.
 */
const cache = new Map<string, string>();

export type LangCode = 'eng' | 'aka' | 'ewe';

// Function to expand book abbreviations to full names
export function expandBookName(reference: string): string {
  const bookNames: Record<string, string> = {
    // Old Testament
    'Gen': 'Genesis', 'Exod': 'Exodus', 'Lev': 'Leviticus', 'Num': 'Numbers', 'Numb': 'Numbers', 'Deut': 'Deuteronomy',
    'Josh': 'Joshua', 'Judg': 'Judges', 'Judges': 'Judges', 'Ruth': 'Ruth',
    '1 Sam': '1 Samuel', '2 Sam': '2 Samuel', '1 Kings': '1 Kings', '2 Kings': '2 Kings',
    '1 Chron': '1 Chronicles', '2 Chron': '2 Chronicles', '1 Chr': '1 Chronicles', '2 Chr': '2 Chronicles',
    'Ezra': 'Ezra', 'Neh': 'Nehemiah', 'Esth': 'Esther',
    'Job': 'Job', 'Ps': 'Psalms', 'Prov': 'Proverbs', 'Eccl': 'Ecclesiastes', 'Song': 'Song of Solomon',
    'Isa': 'Isaiah', 'Jer': 'Jeremiah', 'Lam': 'Lamentations', 'Ezek': 'Ezekiel', 'Dan': 'Daniel',
    'Hos': 'Hosea', 'Joel': 'Joel', 'Amos': 'Amos', 'Obad': 'Obadiah', 'Jonah': 'Jonah', 'Mic': 'Micah',
    'Nah': 'Nahum', 'Hab': 'Habakkuk', 'Zeph': 'Zephaniah', 'Hag': 'Haggai', 'Zech': 'Zechariah', 'Mal': 'Malachi',
    // New Testament
    'Matt': 'Matthew', 'Mat': 'Matthew', 'Mark': 'Mark', 'Luke': 'Luke', 'John': 'John', 'Acts': 'Acts',
    'Rom': 'Romans', '1 Cor': '1 Corinthians', '2 Cor': '2 Corinthians', 'Gal': 'Galatians', 'Eph': 'Ephesians',
    'Phil': 'Philippians', 'Col': 'Colossians', '1 Thess': '1 Thessalonians', '2 Thess': '2 Thessalonians',
    '1 Tim': '1 Timothy', '2 Tim': '2 Timothy', 'Titus': 'Titus', 'Phlm': 'Philemon', 'Heb': 'Hebrews',
    'James': 'James', '1 Pet': '1 Peter', '2 Pet': '2 Peter', '1 John': '1 John', '2 John': '2 John',
    '3 John': '3 John', 'Jude': 'Jude', 'Rev': 'Revelation'
  };

  // More comprehensive pattern to match book names with optional numbers
  const patterns = [
    /^(\d+\s*\w+)\s+(\d+):(\d+)(?:-(\d+))?/i,  // "1 Sam 26:23-25"
    /^(\w+)\s+(\d+):(\d+)(?:-(\d+))?/i         // "Eccl 10:8-9"
  ];

  for (const pattern of patterns) {
    const match = reference.match(pattern);
    if (match) {
      const bookPart = match[1].trim();
      const fullName = bookNames[bookPart];
      if (fullName) {
        return reference.replace(bookPart, fullName);
      }
    }
  }
  
  return reference; // Return original if no match found
}

// Function to format verse text with superscript verse numbers and fix spacing
export function formatVerseWithSuperscripts(verseText: string): string {
  let formatted = verseText;
  
  // First, clean up any HTML tags from the API response
  formatted = formatted.replace(/<[^>]*>/g, '');
  
  // Fix spacing issues after punctuation
  formatted = formatted
    // Add space after punctuation if missing
    .replace(/([.!?,:;])([A-Za-zÀ-ÿĀ-žА-я])/g, '$1 $2')
    // Fix multiple spaces
    .replace(/\s+/g, ' ');
  
  // Handle verse numbers - use global flag to catch ALL occurrences
  // This pattern matches numbers at start of string or after space/punctuation
  formatted = formatted.replace(/(^|[\s.!?,:;])(\d{1,3})(?=[\s.!?,:;À-ÿĀ-žА-яA-Za-z]|$)/g, (match, before, number) => {
    const num = parseInt(number);
    // Only convert to superscript if it looks like a verse number (1-999)
    if (num >= 1 && num <= 999) {
      // Add proper spacing before the superscript if needed
      const spaceBefore = before === '^' || before === '' ? '' : before;
      return `${spaceBefore}<sup class="text-xs font-medium text-gray-500 mr-1">${number}</sup>`;
    }
    return match;
  });
  
  return formatted.trim();
}

// API configuration
const API_KEY = 'ac50eb56b237e1631313afac0a214175';
const API_BASE_URL = 'https://api.scripture.api.bible/v1';

// Bible IDs for api.bible - verified from API response
const bibleIds = {
  eng: 'de4e12af7f28f599-02', // KJV English
  aka: 'b6aee081108c0bc6-01', // Biblica® Open Akuapem Twi Contemporary Bible 2020
  ewe: 'ac90bfebd4ee9c4d-01'  // Biblica® Open Ewe Contemporary Scriptures 2020
};

// Return type to include error information
export interface VerseResult {
  text: string;
  isTranslated: boolean;
  errorMessage?: string;
}

export async function fetchVerse(reference: string, lang: LangCode): Promise<string> {
  const result = await fetchVerseWithInfo(reference, lang);
  return result.text;
}

export async function fetchVerseWithInfo(reference: string, lang: LangCode): Promise<VerseResult> {
  const key = `${lang}|${reference}`;
  if (cache.has(key)) {
    return { text: cache.get(key)!, isTranslated: true };
  }

  console.log(`Fetching verse: ${reference} in language: ${lang}`);

  try {
    // For English, try free API first
    if (lang === 'eng') {
      try {
        const url = `https://bible-api.com/${encodeURIComponent(reference)}`;
        console.log(`Trying free API: ${url}`);
        
        const res = await fetch(url);
        
        if (res.ok) {
          const data = await res.json();
          if (data.text) {
            const text = data.text.trim();
            cache.set(key, text);
            return { text, isTranslated: true };
          }
        } else {
          console.log(`Free API failed with status: ${res.status}`);
        }
      } catch (err) {
        console.log('Free API failed, trying api.bible for English:', err);
      }
    }

    // Try api.bible with authentication
    const bibleId = bibleIds[lang];
    console.log(`Trying api.bible with ID: ${bibleId} for language: ${lang}`);

    // First, let's try a simpler approach - get the passage directly
    // The reference format might need to be converted (e.g., "John 3:16" to "JHN.3.16")
    const formattedRef = formatReferenceForApiBible(reference);
    console.log(`Formatted reference: ${formattedRef}`);

    const passageUrl = `${API_BASE_URL}/bibles/${bibleId}/passages/${formattedRef}`;
    console.log(`API URL: ${passageUrl}`);

    const res = await fetch(passageUrl, {
      headers: {
        'api-key': API_KEY,
        'Accept': 'application/json'
      }
    });

    console.log(`API Response status: ${res.status}`);

    if (res.ok) {
      const data = await res.json();
      console.log('API Response data:', data);
      
      if (data.data && data.data.content) {
        const text = data.data.content.replace(/<[^>]*>/g, '').trim();
        if (text && text.length > 10) { // Ensure we have actual content
          cache.set(key, text);
          return { text, isTranslated: true };
        }
      }
    } else {
      const errorText = await res.text();
      console.error(`API request failed: ${res.status} - ${errorText}`);
    }

    // If api.bible fails, get English version and inform user
    if (lang !== 'eng') {
      console.log(`Translation failed for ${lang}, falling back to English`);
      const englishResult = await fetchVerseWithInfo(reference, 'eng');
      return {
        text: englishResult.text,
        isTranslated: false,
        errorMessage: `Translation not available in ${lang === 'aka' ? 'Akan' : 'Ewe'}. Showing English version.`
      };
    }

    // If all else fails, use curated verses
    const fallbackText = getFallbackVerse(reference, lang);
    if (fallbackText) {
      return { 
        text: fallbackText, 
        isTranslated: true 
      };
    }

    throw new Error('No verse found anywhere');

  } catch (err) {
    console.error(`Bible API error for ${lang} (${reference}):`, err);
    
    // If this is not English, try to get English version
    if (lang !== 'eng') {
      try {
        const englishResult = await fetchVerseWithInfo(reference, 'eng');
        return {
          text: englishResult.text,
          isTranslated: false,
          errorMessage: `Failed to load ${lang === 'aka' ? 'Akan' : 'Ewe'} translation. Showing English version.`
        };
      } catch (englishErr) {
        console.error('Even English fallback failed:', englishErr);
      }
    }

    // Last resort - use a curated verse
    const fallbackText = getFallbackVerse(reference, 'eng');
    return { 
      text: fallbackText || 'Unable to load verse. Please check your internet connection.', 
      isTranslated: false,
      errorMessage: 'Failed to load verse from all sources.'
    };
  }
}

function formatReferenceForApiBible(reference: string): string {
  // Convert "John 3:16" to "JHN.3.16" format that api.bible expects
  // Handle ranges like "Eccl 10:8-9" properly
  
  const bookMappings: Record<string, string> = {
    'gen': 'GEN', 'genesis': 'GEN',
    'exo': 'EXO', 'exodus': 'EXO', 'exod': 'EXO',
    'lev': 'LEV', 'leviticus': 'LEV',
    'num': 'NUM', 'numbers': 'NUM', 'numb': 'NUM',
    'deut': 'DEU', 'deuteronomy': 'DEU',
    'josh': 'JOS', 'joshua': 'JOS',
    'judg': 'JDG', 'judges': 'JDG', 'jdg': 'JDG',
    'ruth': 'RUT',
    '1 sam': '1SA', '1sam': '1SA', '1 samuel': '1SA',
    '2 sam': '2SA', '2sam': '2SA', '2 samuel': '2SA',
    '1 kings': '1KI', '1ki': '1KI', '1 ki': '1KI',
    '2 kings': '2KI', '2ki': '2KI', '2 ki': '2KI',
    '1 chr': '1CH', '1ch': '1CH', '1 chronicles': '1CH',
    '2 chr': '2CH', '2ch': '2CH', '2 chronicles': '2CH', '2 chron': '2CH',
    'ezra': 'EZR',
    'neh': 'NEH', 'nehemiah': 'NEH',
    'esth': 'EST', 'esther': 'EST',
    'job': 'JOB',
    'ps': 'PSA', 'psalm': 'PSA', 'psalms': 'PSA',
    'prov': 'PRO', 'proverbs': 'PRO',
    'eccl': 'ECC', 'ecclesiastes': 'ECC', 'ecc': 'ECC',
    'song': 'SNG', 'songs': 'SNG', 'song of solomon': 'SNG', 'song of songs': 'SNG',
    'isa': 'ISA', 'isaiah': 'ISA',
    'jer': 'JER', 'jeremiah': 'JER',
    'lam': 'LAM', 'lamentations': 'LAM',
    'ezek': 'EZK', 'ezekiel': 'EZK',
    'dan': 'DAN', 'daniel': 'DAN',
    'hos': 'HOS', 'hosea': 'HOS',
    'joel': 'JOL',
    'amos': 'AMO',
    'obad': 'OBA', 'obadiah': 'OBA',
    'jonah': 'JON',
    'mic': 'MIC', 'micah': 'MIC',
    'nah': 'NAM', 'nahum': 'NAM',
    'hab': 'HAB', 'habakkuk': 'HAB',
    'zeph': 'ZEP', 'zephaniah': 'ZEP',
    'hag': 'HAG', 'haggai': 'HAG',
    'zech': 'ZEC', 'zechariah': 'ZEC',
    'mal': 'MAL', 'malachi': 'MAL',
    'matt': 'MAT', 'matthew': 'MAT', 'mat': 'MAT',
    'mark': 'MRK',
    'luke': 'LUK',
    'john': 'JHN',
    'acts': 'ACT',
    'rom': 'ROM', 'romans': 'ROM',
    '1 cor': '1CO', '1cor': '1CO', '1 corinthians': '1CO',
    '2 cor': '2CO', '2cor': '2CO', '2 corinthians': '2CO',
    'gal': 'GAL', 'galatians': 'GAL',
    'eph': 'EPH', 'ephesians': 'EPH',
    'phil': 'PHP', 'philippians': 'PHP',
    'col': 'COL', 'colossians': 'COL',
    '1 thess': '1TH', '1thess': '1TH', '1 thessalonians': '1TH',
    '2 thess': '2TH', '2thess': '2TH', '2 thessalonians': '2TH',
    '1 tim': '1TI', '1tim': '1TI', '1 timothy': '1TI',
    '2 tim': '2TI', '2tim': '2TI', '2 timothy': '2TI',
    'titus': 'TIT',
    'phlm': 'PHM', 'philemon': 'PHM',
    'heb': 'HEB', 'hebrews': 'HEB',
    'james': 'JAS',
    '1 pet': '1PE', '1pet': '1PE', '1 peter': '1PE',
    '2 pet': '2PE', '2pet': '2PE', '2 peter': '2PE',
    '1 john': '1JN', '1jn': '1JN', '1 jn': '1JN',
    '2 john': '2JN', '2jn': '2JN', '2 jn': '2JN',
    '3 john': '3JN', '3jn': '3JN', '3 jn': '3JN',
    'jude': 'JUD',
    'rev': 'REV', 'revelation': 'REV'
  };

  // Parse the reference - handle both single verses and ranges
  const match = reference.match(/^(\d*\s*\w+)\s+(\d+):(\d+)(?:-(\d+))?/i);
  if (!match) {
    console.log(`Could not parse reference: ${reference}`);
    return reference; // Return as-is if we can't parse
  }

  const [, book, chapter, startVerse, endVerse] = match;
  const bookKey = book.toLowerCase().trim();
  const bibleBook = bookMappings[bookKey];
  
  if (!bibleBook) {
    console.log(`No mapping found for book: ${bookKey}`);
    return reference; // Return as-is if no mapping found
  }
  
  if (endVerse) {
    // For ranges, use the format: BOOK.CHAPTER.STARTVERSE-BOOK.CHAPTER.ENDVERSE
    return `${bibleBook}.${chapter}.${startVerse}-${bibleBook}.${chapter}.${endVerse}`;
  } else {
    return `${bibleBook}.${chapter}.${startVerse}`;
  }
}

function getFallbackVerse(reference: string, lang: LangCode): string | null {
  const commonVerses: Record<string, Record<LangCode, string>> = {
    'John 3:16': {
      eng: 'For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.',
      aka: 'Onyankopɔn dɔɔ wiase yi ara kosii sɛ ɔde ne Ba korowe maa, sɛdeɛ obiara a ɔgye no di no nwu, na mmom ɔnya daa nkwa.',
      ewe: 'Elabena Mawu lɔ̃ xexea ale gbegbe be yetsɔ Via ɖeka hɔ̃ɔ la na, be ame sia ame si axɔ edzi ase la maku o, ke boŋ akpɔ agbe mavɔ.'
    },
    'John 13:35': {
      eng: 'By this shall all men know that ye are my disciples, if ye have love one to another.',
      aka: 'Yei mu na nnipa nyinaa bɛhunu sɛ moyɛ me asuafoɔ, sɛ modɔ mo ho mo ho a.',
      ewe: 'Nu sia me amewo katã anya be yenye nye nusrɔ̃lawo, ne mielɔ̃ mia nɔewo.'
    },
    'Ps 23:1': {
      eng: 'The LORD is my shepherd; I shall not want.',
      aka: 'Awurade yɛ me dwaanhwɛfoɔ; merenhia hwee.',
      ewe: 'Yehowa nye nye alẽkplɔla; naneke mahiã nam o.'
    }
  };

  const cleanRef = reference.replace(/[:\s]/g, '').toLowerCase();
  for (const [verseRef, translations] of Object.entries(commonVerses)) {
    const cleanVerseRef = verseRef.replace(/[:\s]/g, '').toLowerCase();
    if (cleanRef.includes(cleanVerseRef) || cleanVerseRef.includes(cleanRef)) {
      return translations[lang];
    }
  }

  return null;
}


