

let time =500;
let spin = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ','\r|   ', '\r/   ', '\r-   ', '\r\\   ','\r|   \n'];

for (let r of spin){
  setTimeout(() => {
    process.stdout.write(r);
  }, time +=200);
}

