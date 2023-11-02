const timer = (ms) => new Promise((res) => setTimeout(res, ms));

export async function register() {
  for (var i = 0; i++; i < 3) {
    console.log('I got registered');
    await timer(3000); // then the created Promise can be awaited
  }
}
