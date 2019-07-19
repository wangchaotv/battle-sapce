document.addEventListener('DOMContentLoaded', () => {
  const selectEnctype = document.querySelector('#select-enctype');
  const userForm = document.querySelector('#user-form');

  selectEnctype.addEventListener('change', e => {
    const enctype = e.target.value;
    userForm.enctype = enctype;
  });
});
