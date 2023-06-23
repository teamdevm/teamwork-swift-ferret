import React from 'react';

function Upload() {
  return (
    <main className="main">
      <div className="main__container container">
        <form className="main__upload upload" id="upload-container" method="POST" action="send.php">
          <input className="upload__input" id="file-input" type="file" name="file" multiple />
          <label className="upload__btn" for="file-input">
            <svg
              className="upload__svg"
              id="upload-image"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              class="lucide lucide-upload"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="17 8 12 3 7 8" />
              <line x1="12" x2="12" y1="3" y2="15" />
            </svg>
            Выберите файл
          </label>
          <span className="upload__text">или перетащите его сюда</span>
        </form>
        <section className="main__new-files files">
          <h2 className="files__title">Загруженные файлы:</h2>
          <ol className="files__list">
            <li className="files__item">
              <p className="files__name">Резюме1.docx</p>
              <div className="files__actions">
                <button className="files__button button">Добавить в базу</button>
                <button className="files__button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    class="lucide lucide-x-circle"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="m15 9-6 6" />
                    <path d="m9 9 6 6" />
                  </svg>
                </button>
              </div>
            </li>
            <li className="files__item">
              <p className="files__name">Резюме2.docx</p>
              <div className="files__actions">
                <button className="files__button button">Добавить в базу</button>
                <button className="files__button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    class="lucide lucide-x-circle"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="m15 9-6 6" />
                    <path d="m9 9 6 6" />
                  </svg>
                </button>
              </div>
            </li>
            <li className="files__item">
              {' '}
              <p className="files__name">Резюме3.docx</p>
              <div className="files__actions">
                <button className="files__button button">Добавить в базу</button>
                <button className="files__button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    class="lucide lucide-x-circle"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="m15 9-6 6" />
                    <path d="m9 9 6 6" />
                  </svg>
                </button>
              </div>
            </li>
          </ol>
        </section>
      </div>
    </main>
  );
}

export default Upload;
