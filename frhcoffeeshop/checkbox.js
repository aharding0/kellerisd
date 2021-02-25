<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.js"></script>
$(document).ready(function() {

    $("#type").change(function() {
        var val = $(this).val();
        $("#size").html(options[val]);
    });


    var options = [
        "<option value='test'>item1: test 1</option><option value='test2'>item1: test 2</option>",
        "<option value='test'>item2: test 1</option><option value='test2'>item2: test 2</option>",
        "<option value='test'>item3: test 1</option><option value='test2'>item3: test 2</option>"
    ];

});