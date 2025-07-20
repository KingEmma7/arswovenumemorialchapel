import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiChevronDown, FiHome } from 'react-icons/fi';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

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
      ]
    },
    { name: 'Clergy', href: '/clergy' },
    { name: 'Contact Us', href: '/contact' }
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  
  const toggleDropdown = (menuName: string) => {
    setActiveDropdown(activeDropdown === menuName ? null : menuName);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 bg-navy-900/95 backdrop-blur-sm z-50 shadow-lg"
    >
      <div className="container-width">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <FiHome className="h-8 w-8 text-gold-500" />
            <div className="text-white">
              <div className="font-bold text-lg">Apostles Revelations Society</div>
              <div className="text-sm text-gray-300">Wovenu Memorial Chapel</div>
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
                onMouseEnter={() => item.submenu && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.submenu ? (
                  <div className="flex items-center space-x-1 cursor-pointer">
                    <span className="text-white hover:text-gold-400 transition-colors duration-200 font-medium">
                      {item.name}
                    </span>
                    <FiChevronDown className={`w-4 h-4 text-white transition-transform duration-200 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-white hover:text-gold-400 transition-colors duration-200 font-medium"
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
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="py-2">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-white hover:bg-navy-700 hover:text-gold-400 transition-colors duration-200"
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
                          className="w-full flex items-center justify-between px-4 py-3 text-white hover:bg-navy-700 hover:text-gold-400 transition-colors duration-200"
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
                                className="block px-8 py-2 text-white hover:bg-navy-600 hover:text-gold-400 transition-colors duration-200"
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
                        className="block px-4 py-3 text-white hover:bg-navy-700 hover:text-gold-400 transition-colors duration-200"
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