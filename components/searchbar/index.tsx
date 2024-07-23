'use client'
import React, { ChangeEvent, FocusEvent, useEffect, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';

interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> { }

const SearchInput: React.FC<SearchInputProps> = (props) => {
  const [state, setState] = useState({
    inputValue: '',
    recentSearches: [] as string[],
    isFocused: false,
  });

  useEffect(() => {
    const storedSearches = localStorage.getItem('recentSearches');
    if (storedSearches) {
      setState((prevState) => ({
        ...prevState,
        recentSearches: JSON.parse(storedSearches),
      }));
    }
  }, []);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setState((prevState) => ({
      ...prevState,
      inputValue: event.target.value,
    }));
  };

  const handleSearch = () => {
    const { inputValue, recentSearches } = state;
    if (inputValue.trim() === '') return;

    const updatedSearches = [
      inputValue,
      ...recentSearches.filter((search) => search !== inputValue),
    ].slice(0, 5);

    setState((prevState) => ({
      ...prevState,
      recentSearches: updatedSearches,
    }));

    localStorage.setItem('recentSearches', JSON.stringify(updatedSearches));
  };

  const handleClear = () => {
    setState((prevState) => ({
      ...prevState,
      inputValue: '',
    }));
  };

  const handleRecentSearchClick = (search: string) => {
    setState((prevState) => ({
      ...prevState,
      inputValue: search,
    }));
  };

  const handleFocus = () => {
    setState((prevState) => ({
      ...prevState,
      isFocused: true,
    }));
  };

  const handleBlur = () => {
    setTimeout(() => {
      setState((prevState) => ({
        ...prevState,
        isFocused: false,
      }));
    }, 100);
  };

  const { inputValue, recentSearches, isFocused } = state;

  return (
    <div className="relative mb-8">
      <div className="flex items-center w-full border border-gray-300 rounded-lg shadow-sm overflow-hidden bg-neutral-50">
        <FiSearch
          className="m-3 cursor-pointer text-gray-400 text-xl"
          onClick={handleSearch}
        />
        <input
          {...props}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type to search..."
          className="p-3 w-full h-full bg-neutral-50 focus:outline-none focus:ring-0 focus:border-transparent"
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyUp={(event) => {
            if (event.key === 'Enter') {
              handleSearch();
            }
          }}
        />
        {inputValue && (
          <FaTimes
            className="m-3 cursor-pointer text-gray-400 text-xl"
            onClick={handleClear}
          />
        )}
      </div>
      {isFocused && recentSearches.length > 0 && (
        <div className="absolute left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-sm z-10">
          <ul className="py-1">
            {recentSearches.map((search, index) => (
              <li
                key={index}
                className={`px-4 cursor-pointer hover:bg-gray-100`}
                onMouseDown={() => handleRecentSearchClick(search)}
              >
                {search}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchInput;