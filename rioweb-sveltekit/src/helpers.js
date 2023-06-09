// convert text to title case
export function titleCase (str) {
    str = str.toLowerCase().split(" ").map(function(word) {
        return (word.charAt(0).toUpperCase() + word.slice(1));
    });
    return str.join(" ");
}