function doCalculate(elm)
    {
        var nic = document.getElementById('nic').value;
        var gender = document.getElementById('gender');
        var dob = document.getElementById('dob');
        var pattern = /[0-9]{9}[V|X|v|x]/;
        if (!pattern.test(nic))
        {
            gender.innerHTML = '';
            dob.innerHTML = '';
            alert('Invalid NIC number');
            return false;
        }
        var mon =
                {
                    "1": ["Jan", 31],
                    "2": ["Feb", 29],
                    "3": ["Mar", 31],
                    "4": ["Apr", 30],
                    "5": ["May", 31],
                    "6": ["Jun", 30],
                    "7": ["Jul", 31],
                    "8": ["Aug", 31],
                    "9": ["Sep", 30],
                    "10": ["Oct", 31],
                    "11": ["Nov", 30],
                    "12": ["Dec", 31]
                };
        if (nic.length >= 5)
        {
            year = "19" + nic.substr(0, 2);
            days = parseInt(nic.substr(2, 3));
            if (days > 500)
            {
                gender.innerHTML = "Female";
                days = days - 500;
            }
            else
            {
                gender.innerHTML = "Male";
            }
            var key;
            for (key in mon)
            {
                if (days > mon[key][1])
                {
                    days = days - mon[key][1];
                }
                else
                {
                    break;
                }
            }
            if (days < 10)
            {
                days = "0" + days;
            }
            dob.innerHTML = mon[key][0] + ", " + days + " " + year;
        }
        return false;
    }