function keystroke_search(){let e,t,n,l,o,a,s;for(t=(e=document.getElementById("keystroke_searchbox")).value.toUpperCase(),l=(n=document.getElementById("table-results")).getElementsByTagName("tr"),a=0;a<l.length;a++)(o=l[a].getElementsByTagName("td")[0])&&((s=o.textContent||o.innerText).toUpperCase().indexOf(t)>-1?l[a].style.display="":l[a].style.display="none")}function copyCommand(){var e=document.getElementById("copy-input");e.select(),e.setSelectionRange(0,99999),document.execCommand("copy")}const getCellValue=(e,t)=>e.children[t].getAttribute("sort-info"),comparer=(e,t)=>(n,l)=>((e,t)=>""===e||""===t||isNaN(e)||isNaN(t)?e.toString().localeCompare(t):e-t)(getCellValue(t?n:l,e),getCellValue(t?l:n,e));
