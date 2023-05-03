<script>
    import {onMount} from "svelte";
    import {apiCall, fetchStats} from "../../api.js"
    import {titleCase} from "../../helpers.js"
    import Table from './Table.svelte'
    let stats, batting;

    onMount(async () => {
        stats = await apiCall('stats', 'by_char=1&by_user=1&username=mori&exclude_misc=1&exclude_pitching=1&exclude_fielding=1&tag=StarsOffSeason5');

        stats = stats.Stats.MORI;
        console.log('stats')
        console.log(stats);

        batting = stats.Batting;

        // get names of stats, and filter for the ones to display
        let statNames = Object.keys(stats[Object.keys(stats)[0]]["Batting"]);
        let statFilter = [];

        // loop to create filtered list
        for (let i = 0; i < statNames.length; i++) {
            if (statNames[i].includes("summary") && statNames[i].includes("_")) {
                statFilter.push(statNames[i]);
            }
        }

        let table = document.querySelector(".stat-table");
        console.log('table');
        console.log(table);
        console.log('statfilter');
        console.log(statFilter);

        // create header row for table
        let tableHead = document.createElement("thead");
        let headerRow = document.createElement("tr");
        let nameHeader = document.createElement("th");
        nameHeader.innerHTML = "Name";
        headerRow.appendChild(nameHeader);


        for (let i = 0; i < statFilter.length; i++) {
            let statHeader = document.createElement("th");

            let text = statFilter[i].replace("summary_", "").replace("_", " ");
            text = (text.charAt(0).toUpperCase() + text.slice(1));
            statHeader.innerHTML = titleCase(text);
            headerRow.appendChild(statHeader);
        }
        tableHead.append(headerRow);
        tableHead.classList.add('table-header')
        table.appendChild(tableHead);

        // create columns
        let tableBody = document.createElement("tbody");

        for (let name in stats) {
            // access nested dict
            let playerStats = stats[name]["Batting"];

            // create row for player stats
            let tableRow = document.createElement("tr");

            // create image elements for player image
            let imgCell = document.createElement("td");
            let imgElement = document.createElement("img");
            imgElement.src = "src/lib/images/" + name + ".png";
            imgElement.alt = name;
            imgCell.appendChild(imgElement);
            tableRow.appendChild(imgCell);
            // create cell for player stats
            for (let i = 0; i < statFilter.length; i++) {
                let statCell = document.createElement("td");
                statCell.innerHTML = playerStats[statFilter[i]];
                tableRow.appendChild(statCell)
            }
            tableBody.appendChild(tableRow)
            table.appendChild(tableBody);
        }
    });

</script>

<Table></Table>


<!--<body>-->
<!--<nav>-->
<!--    <a href="/">Home</a>-->
<!--    <a href="/table">Table</a>-->
<!--    <a href="/landing-data">Landing Data</a>-->
<!--</nav>-->

<!--<div class="container">-->
<!--<h1>Stat Table - Batting</h1>-->
<!--    <Table></Table>-->
<!--<table class="stat-table">-->

<!--</table>-->
<!--</div>-->
<!--</body>-->

<!--<style>
    /*h1 {*/
    /*    color: white;*/
    /*    text-outline: black 2px;*/
    /*}*/
    /*body {*/
    /*    font-family: sans-serif;*/
    /*    background-color: #3366cc;*/
    /*    padding: 0;*/
    /*    margin: 0;*/
    /*    height: 100%;*/
    /*    width: 100%;*/
    /*}*/

    /*.container {*/
    /*    display: flex;*/
    /*    flex-direction: column;*/
    /*    position: relative;*/
    /*    margin: 0;*/
    /*    height: 100%;*/
    /*    width: 100%;*/
    /*    justify-content: center;*/
    /*    align-items: center;*/
    /*    border-radius: 10px;*/
    /*}*/

    /*:global(table) {*/
    /*    border-collapse: collapse;*/
    /*    border: 1px solid black;*/
    /*    text-align: center;*/
    /*    vertical-align: middle;*/
    /*    box-shadow: #222232 20px 20px 20px 20px;*/
    /*    min-height: 100vh;*/
    /*}*/

    /*:global(th), :global(td) {*/
    /*    border: 1px solid black;*/
    /*    padding: 8px;*/
    /*    font-size: large;*/

    /*}*/

    /*:global(thead) {*/
    /*    background-color: #333;*/
    /*    color: white;*/
    /*    font-size: 0.875rem;*/
    /*    text-transform: uppercase;*/
    /*    letter-spacing: .2rem;*/
    /*}*/
    /*:global(tbody tr:nth-child(odd)) {*/
    /*    background-color: #fff;*/
    /*}*/

    /*:global(tbody tr:nth-child(even)) {*/
    /*    background-color: #eee;*/
    /*}*/

    /*:global(tbody th) {*/
    /*    background-color: #36c;*/
    /*    color: #fff;*/
    /*    font-weight: bold;*/
    /*    text-align: left;*/
    /*}*/

    /*:global(tbody tr:nth-child(even) th) {*/
    /*    background-color: #25c;*/
    /*}*/
</style> -->

