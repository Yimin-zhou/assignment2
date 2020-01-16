function sortTable1(z) {
    var table, rows;
    var switching, shouldSwitch;

    table = document.getElementById("table1");
    switching = true;

    while (switching) {
        switching = false;
        rows = table.rows;
        for (var i = 1; i < (rows.length - 2); i++) {
            shouldSwitch = false;
            var x = rows[i].getElementsByTagName("td")[z];
            var y = rows[i + 1].getElementsByTagName("td")[z];

            if (x.innerHTML > y.innerHTML) {

                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {

            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;

        }
    }
}

function sortTable2(z) {
    var table, rows;
    var switching, shouldSwitch;

    table = document.getElementById("table2");
    switching = true;

    while (switching) {
        switching = false;
        rows = table.rows;
        for (var i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            var x = rows[i].getElementsByTagName("td")[z];
            var y = rows[i + 1].getElementsByTagName("td")[z];

            if (x.innerHTML > y.innerHTML) {

                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {

            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;

        }
    }
}