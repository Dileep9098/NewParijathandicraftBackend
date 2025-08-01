$(function () {
    var e = new Gantt("#tasks-gantt", [{ id: "1", name: "Draft the new contract document for sales team", start: "2019-07-16", end: "2019-07-20", progress: 55 }, { id: "2", name: "Find out the old contract documents", start: "2019-07-19", end: "2019-07-21", progress: 85, dependencies: "1" }, { id: "3", name: "Organize meeting with sales associates to understand need in detail", start: "2019-07-21", end: "2019-07-22", progress: 80, dependencies: "2" }, { id: "4", name: "iOS App home page", start: "2019-07-15", end: "2019-07-17", progress: 80 }, { id: "5", name: "Write a release note", start: "2019-07-18", end: "2019-07-22", progress: 65, dependencies: "4" }, { id: "6", name: "Setup new sales project", start: "2019-07-20", end: "2019-07-31", progress: 15 }, { id: "7", name: "Invite user to a project", start: "2019-07-25", end: "2019-07-26", progress: 99, dependencies: "6" }, { id: "8", name: "Coordinate with business development", start: "2019-07-28", end: "2019-07-30", progress: 35, dependencies: "7" }, { id: "9", name: "Kanban board design", start: "2019-08-01", end: "2019-08-03", progress: 25, dependencies: "8" }, { id: "10", name: "Enable analytics tracking", start: "2019-08-05", end: "2019-08-07", progress: 60, dependencies: "9" }], {
        view_modes: ["Quarter Day", "Half Day", "Day", "Week", "Month"], bar_height: 20, padding: 18, view_mode: "Week", custom_popup_html: function (e) {
            var s = e.end; 60 <= e.progress || 30 <= e.progress && e.progress; return `
            <div className="popover fade show bs-popover-right gantt-task-details" role="tooltip">
                <div className="arrow"></div><div className="popover-body">
                <h5>${e.name}</h5><p className="mb-2">Expected to finish by ${s}</p>
                <div className="progress mb-2">
                <div className="progress-bar  progressCls + '" role="progressbar" style="width: ${e.progress}%;" aria-valuenow="${e.progress}"
                 aria-valuemin="0" aria-valuemax="100">${e.progress}%</div>
                </div></div></div>
                `}
    }), s = ($("#modes-filter :input").on("change", function () { e.change_view_mode($(this).val()) }), document.getElementById("modes-filter").querySelectorAll(".btn")); s.forEach(function (e) { e.addEventListener("click", function () { s.forEach(function (e) { e.classList.remove("active") }), e.classList.add("active") }) })
});