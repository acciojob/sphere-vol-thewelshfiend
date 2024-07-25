function volume_sphere(e)
{   //Write your code here
    e.preventDefault();
    const radius = document.getElementById('radius').value;
    if(radius < 0)
    {
        document.getElementById('volume').value = 'NaN';
        return;
    }
    const volume = (4/3)*(Math.PI)*radius*radius*radius;
    document.getElementById('volume').value = volume.toFixed(4);
}

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
