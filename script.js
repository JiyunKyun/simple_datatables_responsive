$(document).ready(function () {
  // Custom pagination function
  $.fn.DataTable.ext.pager.simple_numbers_no_ellipses = function (page, pages) {
    var numbers = [];
    var buttons = 3; // Set the number of pagination buttons
    var half = Math.floor(buttons / 2);

    var _range = function (len, start) {
      var end;
      if (typeof start === "undefined") {
        start = 0;
        end = len;
      } else {
        end = start;
        start = len;
      }
      var out = [];
      for (var i = start; i < end; i++) {
        out.push(i);
      }
      return out;
    };

    if (pages <= buttons) {
      numbers = _range(0, pages);
    } else if (page <= half) {
      numbers = _range(0, buttons);
    } else if (page >= pages - 1 - half) {
      numbers = _range(pages - buttons, pages);
    } else {
      numbers = _range(page - half, page + half + 1);
    }

    numbers.DT_el = "span";

    return ["previous", numbers, "next"];
  };

  function initializeDataTable(
    tableId,
    customRowsId,
    customSearchId,
    customInfoId,
    customPaginationId
  ) {
    let table = $(tableId).DataTable({
      dom: '<"top"i>rt<"bottom"lp><"clear">',
      pagingType: "simple_numbers_no_ellipses", // Use custom pagination function
      pageLength: 5,
      lengthMenu: [5, 10, 25, 50, 100],
      language: {
        paginate: {
          first: "<<",
          last: ">>",
          next: ">",
          previous: "<",
        },
        lengthMenu: "_MENU_", // Only show the select element
      },
      order: [],
      columnDefs: [
        { targets: [7], orderable: false }, // Disable ordering on specific column
      ],
      initComplete: function () {
        // Move the length menu
        let $lengthSelect = $(tableId + "_length select");
        $lengthSelect.addClass("form-select").attr("id", "rows-cuti-pengajuan");
        $(customRowsId).append($lengthSelect.closest("div"));

        // Move the search input
        let $searchInput = $(tableId + "_filter");
        $(customSearchId).append($searchInput);

        // Move the info
        let $info = $(tableId + "_info");
        $(customInfoId).append($info);

        // Move the pagination
        let $pagination = $(tableId + "_paginate");
        $(customPaginationId).append($pagination);
      },
    });

    // Custom search input
    $(customSearchId + " input").on("keyup", function () {
      table.search(this.value).draw();
    });

    return table;
  }

  // Initialize DataTables for each table
  let tableCutiPengajuanAdmin = initializeDataTable(
    "#table-cuti-pengajuan",
    "#rows-cuti-pengajuan",
    "#search-cuti-pengajuan",
    "#info-cuti-pengajuan",
    "#pagination-cuti-pengajuan"
  );
});
