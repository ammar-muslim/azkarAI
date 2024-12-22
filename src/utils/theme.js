export const getThemeColors = (isDark) => ({
    background: isDark
        ? 'bg-gradient-to-br from-gray-900 via-cyan-900 to-violet-900'
        : 'bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50',
    text: isDark ? 'text-white' : 'text-amber-800',
    accent: isDark ? 'text-purple-400' : 'text-emerald-600',
    button: isDark
        ? 'from-purple-600 to-cyan-600'
        : 'from-emerald-500 to-teal-500',
});
export const getCategoryText = (category) => category === 'morning' ? 'الصباح' : 'المساء';
