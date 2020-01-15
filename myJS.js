function sortTable1(z) {
    var table, rows;
    var switching, shouldSwitch, switchCount = 0;

    table = document.getElementById("table1");
    switching = true;

    while (switching) {
        switching = false;
        rows = table.rows;
        for (var i = 1; i < (rows.length - 2); i++) {
            shouldSwitch = false;
            var x = rows[i].getElementsByTagName("td")[z];
            var y = rows[i + 1].getElementsByTagName("td")[z];

            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {

                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {

            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;

            switchCount++;
        } else {

            if (switchCount == 0) {
                switching = true;
            }
        }
    }
}

function sortTable2(z) {
    var table, rows;
    var switching, shouldSwitch, switchCount = 0;

    table = document.getElementById("table2");
    switching = true;

    while (switching) {
        switching = false;
        rows = table.rows;
        for (var i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            var x = rows[i].getElementsByTagName("td")[z];
            var y = rows[i + 1].getElementsByTagName("td")[z];

            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {

                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {

            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;

            switchCount++;
        } else {

            if (switchCount == 0) {
                switching = true;
            }
        }
    }
}

function reset() {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "https://wt.ops.labs.vu.nl/api20/a36aadb2/reset", false);
    xhr.send();
}