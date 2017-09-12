$(document).ready(function()
{
    var page_title = $('head > title').text();

    console.log(page_title);

    $('.menulinks').removeClass('active');

    if(page_title == "Home")
    {
        $('.home_link').addClass('active');
    }
    else if(page_title == "Features")
    {
        $('.features_link').addClass('active');
    }
    else if(page_title == "Video")
    {
        $('.video_link').addClass('active');
    }
    else if(page_title == "Pricing")
    {
        $('.pricing_link').addClass('active');
    }
    else if(page_title == "Contact")
    {
        $('.contact_link').addClass('active');
    }
    else if(page_title == "SignUp")
    {
        $('.signup_link').addClass('active');
    }
    else if(page_title == "Login")
    {
        $('.login_link').addClass('active');
    }

    get_state_list('US');

    $('#country').change(function () {

        var country = $(this).val();

        get_state_list(country);

    });
});

function get_state_list(country)
{
    console.log('country:'+country);
    $.ajax({
        type: "GET",
        url: "/iautoscan/states_list.php?country="+country,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function(res) {
            var list = "<select id='state' name='state' class='form-control'>";
            for (var i = 0; i < res.length; i++) {
                list = list + '<option value=' + res[i].state_code + '>' + res[i].state_value + '</option>';
            }
            list = list + '</select>';
            $('#state_div').html(list);
        }
    });
}