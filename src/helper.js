function paginator(items, current_page, per_page_items) {
  let page = current_page || 1;
  let per_page = per_page_items || 10;
  let offset = (page - 1) * per_page;
  let paginatedItems = items.slice(offset).slice(0, per_page_items);
  return paginatedItems;
}
function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
const debounce = (func, wait) => {
  let timeout;

  return function executedFunction(...args) {
    const later = () => {
      timeout = null;

      func(...args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

export { paginator, debounce, wait };
