function getPageMetadata(totalItems, pageSize, currentPage) {
  const totalPages = Math.ceil(totalItems / pageSize);

  if (totalItems === 0) {
    return { totalPages: 0, startItem: 0, endItem: 0, hasPrev: false, hasNext: false };
  }

  const startItem = (currentPage - 1) * pageSize + 1;
  const endItem = Math.min(currentPage * pageSize, totalItems);

  return {
    totalPages,
    startItem,
    endItem,
    hasPrev: currentPage > 1,
    hasNext: currentPage < totalPages,
  };
}

// Example 1: last, partial page
console.log(getPageMetadata(95, 10, 10));
// { totalPages: 10, startItem: 91, endItem: 95, hasPrev: true, hasNext: false }

// Example 2: middle page
console.log(getPageMetadata(24, 5, 3));
// { totalPages: 5, startItem: 11, endItem: 15, hasPrev: true, hasNext: true }

// No items
console.log(getPageMetadata(0, 10, 1));
// { totalPages: 0, startItem: 0, endItem: 0, hasPrev: false, hasNext: false }

// First page
console.log(getPageMetadata(95, 10, 1));
// { totalPages: 10, startItem: 1, endItem: 10, hasPrev: false, hasNext: true }

// Exact multiple, last page is full
console.log(getPageMetadata(100, 10, 10));
// { totalPages: 10, startItem: 91, endItem: 100, hasPrev: true, hasNext: false }

// Single page, fewer items than pageSize
console.log(getPageMetadata(3, 10, 1));
// { totalPages: 1, startItem: 1, endItem: 3, hasPrev: false, hasNext: false }

// Page size larger than everything, single item
console.log(getPageMetadata(1, 10000, 1));
// { totalPages: 1, startItem: 1, endItem: 1, hasPrev: false, hasNext: false }