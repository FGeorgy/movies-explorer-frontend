import './SearchForm.css';

function SearchForm() {
  return (
    <section className="search-form">
      <form className="search-form__form">
        <fieldset className="search-form__fieldset">
          <label className="search-form__label">
            <input
              type="search"
              className="search-form__input"
              name="search"
              placeholder="Фильм"
            />
            <button type="submit" className="search-form__submit"/>
          </label>
        </fieldset>
        <label className="search-form__label">
          <input
            type="checkbox"
            className="serach-form__switch"
          />
          Короткометражки
        </label>
      </form>
    </section>
  )
};

export default SearchForm;
