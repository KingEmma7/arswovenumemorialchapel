import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiChevronDown, FiHome } from 'react-icons/fi';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const menuItems = [
    { name: 'WMC News', href: '/news' },
    { 
      name: 'Services', 
      href: '/services',
      submenu: [
        { name: 'Sabbath Service', href: '/sabbath-service' },
        { name: 'ShewBread', href: '/shewbread' },
        { name: 'Wednesday Teachings', href: '/wednesday-teachings' },
        { name: 'Friday Prayer Service', href: '/friday-prayer' }
      ]
    },
    { name: 'Teachings', href: '/teachings' },
    { 
      name: 'Groups', 
      href: '/groups',
      submenu: [
        { name: 'Children\'s Fellowship', href: '/childrens-fellowship' },
        { name: 'Women\'s Fellowship', href: '/womens-fellowship' },
        { name: 'Men\'s Fellowship', href: '/mens-fellowship' },
        { name: 'Brass Band', href: '/brass-band' },
        { name: 'Senior Choir', href: '/senior-choir' },
        { name: 'Junior Choir', href: '/junior-choir' },
        { name: 'Usher\'s Ministry', href: '/ushers-ministry' },
        { name: 'WMC Media Team', href: '/wmc-media-team' },
      ]
    },
    { name: 'Clergy', href: '/clergy' },
    { name: 'Contact Us', href: '/contact' }
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  
  const toggleDropdown = (menuName: string) => {
    setActiveDropdown(activeDropdown === menuName ? null : menuName);
  };

  const handleMouseEnter = (menuName: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(menuName);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150); // Small delay to prevent immediate hiding
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 bg-navy-900/95 backdrop-blur-sm z-50"
      style={{ zIndex: 1000 }}
    >
      <div className="container-width">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{ y: [0, -5, 0] }}
              transition={{ 
                y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                scale: { duration: 0.2 }
              }}
            >
              <Image src="/images/arslogo.png" alt="ARS logo" width={100} height={100} />
            </motion.div>
            <div className="text-white">
              <div className="font-bold text-lg">Apostles Revelation Society</div>
              <div className="text-sm text-gray-300 uppercase font-bold">Wovenu Memorial Chapel</div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
                onMouseEnter={() => item.submenu && handleMouseEnter(item.name)}
                onMouseLeave={() => item.submenu && handleMouseLeave()}
              >
                {item.submenu ? (
                  <div className="flex items-center space-x-1 cursor-pointer">
                    <span className="text-white hover:text-gold-500 transition-colors duration-200 font-medium">
                      {item.name}
                    </span>
                    <FiChevronDown className={`w-4 h-4 text-white transition-transform duration-200 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-white hover:text-gold-500 transition-colors duration-200 font-medium"
                  >
                    {item.name}
                  </Link>
                )}
                
                {/* Dropdown Menu */}
                {item.submenu && activeDropdown === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-navy-800 rounded-lg shadow-xl z-50"
                    onMouseEnter={() => handleMouseEnter(item.name)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="py-2">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-white hover:bg-navy-700 hover:text-gold-500 transition-colors duration-200"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence mode="wait">
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-navy-800 rounded-lg mb-4"
            >
              <div className="py-4">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    {item.submenu ? (
                      <div>
                        <button
                          onClick={() => toggleDropdown(item.name)}
                          className="w-full flex items-center justify-between px-4 py-3 text-white hover:bg-navy-700 hover:text-gold-500 transition-colors duration-200"
                        >
                          <span>{item.name}</span>
                          <FiChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                            activeDropdown === item.name ? 'rotate-180' : ''
                          }`} />
                        </button>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="bg-navy-700"
                          >
                            {item.submenu.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="block px-8 py-2 text-white hover:bg-navy-600 hover:text-gold-500 transition-colors duration-200"
                                onClick={() => setIsOpen(false)}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className="block px-4 py-3 text-white hover:bg-navy-700 hover:text-gold-500 transition-colors duration-200"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar; 