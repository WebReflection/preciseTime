// copy and paste build/preciseTime here

// since this supposes to work with too many envs

var t = [+new Date / 1000, this.preciseTime()];
try {
  console.log(t);
} catch(o_O) {
  try {
    alert(t);
  } catch(o_O) {
    print(t);
  }
}