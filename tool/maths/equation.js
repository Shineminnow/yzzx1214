function linearEquation()
{
	var a, b, c, x;
	a = document.getElementById('linearA').value;
	b = document.getElementById('linearB').value;
	c = document.getElementById('linearC').value;
	if (a == 0)
    {
        if (b == c) x = "任意实数";
        else x = "无解";
    }
    else x = (c - b) / a;
	document.getElementById('linearX').value = x;
}

function quadraticEquation()
{
	var a, b, c, delta, p, q, x1, x2;
	a = document.getElementById('quadraticA').value;
	b = document.getElementById('quadraticB').value;
	c = document.getElementById('quadraticC').value;
	if (a == 0)
    {
        if (b == 0)
        {
            if (c == 0) x1 = "任意实数";
            else x1 = "无解";
        }
        else x1 = (-c)/b;
    }
    else
    {
        delta = b * b - 4 * a * c;
        if (delta >= 0)
        {
            p = (-b) / (2 * a);
            q = Math.sqrt(delta) / (2 * a);
            x1 = p - q;
            x2 = p + q;
        }
        else x1 = "无解";
    }
	document.getElementById('quadraticX1').value = x1;
	document.getElementById('quadraticX2').value = x2;
}

function twounknownsEquation()
{
	var a1, a2, b1, b2, c1, c2, n, x, y;
	a1 = document.getElementById('twounknownsA1').value;
	b1 = document.getElementById('twounknownsB1').value;
	c1 = document.getElementById('twounknownsC1').value;
	a2 = document.getElementById('twounknownsA2').value;
	b2 = document.getElementById('twounknownsB2').value;
	c2 = document.getElementById('twounknownsC2').value;
	if (a1 == 0 || a2 == 0 || b1 == 0 || b2 == 0)
	    x = "出错";
    else
    {
        n = a1 / a2;
        b2 = b2 * n;
        c2 = c2 * n;
        y = (c1 - c2) / (b1 - b2);
        x = (c1 - b1 * y) / a1;
    }
	document.getElementById('twounknownsX').value = x;
	document.getElementById('twounknownsY').value = y;
}