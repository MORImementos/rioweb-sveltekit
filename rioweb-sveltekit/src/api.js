export async function fetchStats() {
    const response = await fetch("https://api.projectrio.app/stats/?by_char=1&by_user=1&username=mori&exclude_misc=1&exclude_pitching=1&exclude_fielding=1");
    return await response.json();
}

export async function apiCall(category, params="") {
    const url = `https://api.projectrio.app/${category}/?${params}`;
    const response = await fetch(url);
    return await response.json();
}