// Sidebar Trigger
document.addEventListener("DOMContentLoaded", function () {
    const options = {
        "edge": "left"
    }

    var elems = document.querySelectorAll(".sidenav");
    var instances = M.Sidenav.init(elems, options);
});

function clearFilters() {
    document.getElementsByName("checkbox").forEach(element => {
        element.checked = false;
    });
}