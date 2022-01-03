document.getElementById("kgsInput").addEventListener("input", e => {
    let kgs = e.target.value;
    document.getElementById("lbsOutput").innerHTML = kgs * 2.2046;
})

document.getElementById("feetInput").addEventListener("input", e => {
    let feet = e.target.value;
    document.getElementById("cmsOutput").innerHTML = feet * 30.48;
})
document.getElementById("celciusInput").addEventListener("input", e => {
    let celcius = e.target.value;
    document.getElementById("fahrenOutput").innerHTML = (celcius * 1.8) + 32;
  })
  document.getElementById("fahrenInput").addEventListener("input", e => {
    let farenheit = e.target.value;
    document.getElementById("celciusOutput").innerHTML =  5/9 * (farenheit - 32) ;
  })
  document.getElementById("hourInput").addEventListener("input", (e) => {
    let hour = e.target.value;
    document.getElementById("secOutput").innerHTML = hour * 60 * 60;
  });
  document.getElementById("literInput").addEventListener("input", (e) => {
    let lit = e.target.value;
    document.getElementById("mililiterOutput").innerHTML = lit * 1000;
  });