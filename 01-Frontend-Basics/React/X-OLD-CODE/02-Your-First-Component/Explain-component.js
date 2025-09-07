// import

// function
function Profile() {
  return (
    <img
      src="https://i.imgur.com/MK3eW3As.jpg"
      alt="Katherine Johnson"
    />
  );
}

// export - return
export default function Gallery() {
  return (
    <main>
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
    </main>
  );
}

// Now that you’ve defined your Profile component, 
// you can nest it inside other components. 
// For example, you can export a Gallery component that 
// uses multiple Profile components:

// <Profile /> starts with a capital P, so React knows that 
// we want to use our component called Profile.

// The export default prefix is a standard JavaScript syntax (not specific to React). It lets you mark the main function in a file so that you can later import it from other files. 
// (More on importing in Importing and Exporting Components!)

return (
  <div>
    <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
  </div>
);
// Without parentheses, any code on the lines after return will be ignored!


