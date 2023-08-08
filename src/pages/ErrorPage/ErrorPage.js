import React from 'react';

const ErrorPage = () => {
    return (
    <div style={{ textAlign: 'center', padding: '2em' }}>
      <h1>Помилка 404</h1>
      <p>Пробачте,але сторінка, яку ви шукайте, не існує.</p>
      <p>Будь ласка, перевірте URL або поверніться на <a href="/">Головну сторінку</a>.</p>
    </div>
    );
};

export default ErrorPage;