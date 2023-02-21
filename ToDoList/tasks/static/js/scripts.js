var deleteBtn = $('.delete-btn');
var searchBtn = $('#search-btn');
var searchForm = $('#search-form');

$(document).ready(function() {

    $(deleteBtn).on('click', function(e){

        e.preventDefault();

        var delLink = $(this).attr('href');
        var result = confirm('Quer deletar essa tarefa?');

        if (result) {
            window.location.href = delLink;
        }
    });

});

$(searchBtn).on('click', function() {
    searchForm.submite();
});
