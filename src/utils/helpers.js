export function formatPrice(num) {
  if (!num) return "Liên hệ";
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(num);
}

export function filterAndSortFish(fishList, { category = 'all', searchQuery = '', statusFilter = 'all', sortBy = 'default' }) {
  let result = [...fishList];

  // Category filter
  if (category && category !== 'all') {
    result = result.filter(item => item.category === category);
  }

  // Status filter
  if (statusFilter && statusFilter !== 'all') {
    result = result.filter(item => item.status === statusFilter);
  }

  // Search filter
  if (searchQuery && searchQuery.trim() !== '') {
    const q = searchQuery.toLowerCase().trim();
    result = result.filter(item => 
      item.name.toLowerCase().includes(q) ||
      item.scientificName.toLowerCase().includes(q) ||
      item.categoryName.toLowerCase().includes(q) ||
      item.origin.toLowerCase().includes(q) ||
      (item.tags && item.tags.some(tag => tag.toLowerCase().includes(q)))
    );
  }

  // Sorting
  switch (sortBy) {
    case 'price-asc':
      result.sort((a, b) => a.price - b.price);
      break;
    case 'price-desc':
      result.sort((a, b) => b.price - a.price);
      break;
    case 'rarity':
      const rarityWeight = { 'Masterpiece': 3, 'Hiếm có': 2, 'Tuyển chọn': 1 };
      result.sort((a, b) => (rarityWeight[b.rarity] || 0) - (rarityWeight[a.rarity] || 0));
      break;
    case 'name-asc':
      result.sort((a, b) => a.name.localeCompare(b.name, 'vi'));
      break;
    case 'featured':
      result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
      break;
    default:
      // default: keep curated showcase sequence
      break;
  }

  return result;
}

