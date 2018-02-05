$(document).ready(function() {
    
    //markdown
    //var template = "[<<link_text>>](https://t.me/iv?url=<<link_href>>&rhash=5a55dde839c9a5)";
    
    // html        
    var template = '<a href="https://t.me/iv?url=<<link_href>>&rhash=5a55dde839c9a5"><<link_text>></a>';  
    
    $('#input_link_href').on('input change keyup', onChange)
    $('#input_link_text').on('input change keyup', onChange)

    $('#input_link_href').trigger('change');

    function onChange() {
        try {           
            var link_text = $('#input_link_text').val().trim();
            var link_href = $('#input_link_href').val().trim();
            
            var output = template
                .replace("<<link_text>>", link_text)
                .replace("<<link_href>>", link_href);
            
            $('#output').text(output);
        } catch (err) {
            $('#output').text('');
            console.log(err);
        }
    }
});
