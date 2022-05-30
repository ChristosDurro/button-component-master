
import './App.css';

function App() {
  return (

    <div className="container">
      <nav className="navbar">
        <ul>
          <li className="nav-items">Colors</li>
          <li className="nav-items">Typography</li>
          <li className="nav-items">Spaces</li>
          <li className="nav-items" id="active">Buttons</li>
          <li className="nav-items">Inputs</li>
          <li className="nav-items">Grid</li>
        </ul>
      </nav>

      <main className="button-section">

        <h2 className="title">Buttons</h2>
        <div className="variants" id="btn-variants">

          <div className="btn-display">
            <p>&lt;Button /&gt;</p>
            <button className="btn" id="normal-btn">Default</button>
          </div>

          <div className="btn-display">
            <p>&lt;Button variant="outline" /&gt;</p>
            <button className="btn" id="outline-btn">Default</button>
          </div>

          <div className="btn-display">
            <p>&lt;Button variant="text" /&gt;</p>
            <button className="btn" id="text-btn">Default</button>
          </div>

        </div>

        <h2 className="title">Disabled Buttons</h2>
        <div className="variants" id="disabled-variants">

          <div className="btn-display">
            <p>&lt;Button disableShadow /&gt;</p>
            <button className="btn" id="disabled-shadow">Default</button>
          </div>

          <div className="btn-display">
            <p>&lt;Button disabled /&gt;</p>
            <button className="btn" id="disabled-btn">Default</button>
          </div>

          <div className="btn-display">
            <p>&lt;Button variant="text" disabled /&gt;</p>
            <button className="btn" id="disabled-text-btn">Default</button>
          </div>

        </div>

        <h2 className="title">Icon Buttons</h2>
        <div className="variants" id="icon-variants">
          <div className="left-icons">

            <div className="btn-display icon-btn-spacing">
              <p>&lt;Button startIcon="add_location" /&gt;</p>
              <button className="btn">
                <span className="material-symbols-outlined left">
                  add_location
                </span>
                Default
              </button>
            </div>

            <div className="btn-display icon-btn-spacing">
              <p>&lt;Button startIcon="shopping_cart" /&gt;</p>
              <button className="btn">
                <span className="material-symbols-outlined left">
                  shopping_cart
                </span>
                Default
              </button>
            </div>

            <div className="btn-display icon-btn-spacing">
              <p>&lt;Button startIcon="zoom_out_map" /&gt;</p>
              <button className="btn">
                <span className="material-symbols-outlined left">
                  zoom_out_map
                </span>
                Default
              </button>
            </div>

            <div className="btn-display icon-btn-spacing">
              <p>&lt;Button startIcon="content_copy" /&gt;</p>
              <button className="btn">
                <span className="material-symbols-outlined left">
                  content_copy
                </span>
                Default
              </button>
            </div>

            <div className="btn-display icon-btn-spacing">
              <p>&lt;Button startIcon="skip_next" /&gt;</p>
              <button className="btn">
                <span className="material-symbols-outlined left">
                  skip_next
                </span>
                Default
              </button>
            </div>

          </div>

          <div className="right-icons">

            <div className="btn-display icon-btn-spacing">
              <p>&lt;Button endIcon="add_location" /&gt;</p>
              <button className="btn">
                Default
                <span className="material-symbols-outlined right">
                  add_location
                </span>
              </button>
            </div>

            <div className="btn-display icon-btn-spacing">
              <p>&lt;Button endIcon="shopping_cart" /&gt;</p>
              <button className="btn">
                Default
                <span className="material-symbols-outlined right">
                  shopping_cart
                </span>
              </button>
            </div>

            <div className="btn-display icon-btn-spacing">
              <p>&lt;Button endIcon="zoom_out_map" /&gt;</p>
              <button className="btn">
                Default
                <span className="material-symbols-outlined right">
                  zoom_out_map
                </span>
              </button>
            </div>

            <div className="btn-display icon-btn-spacing">
              <p>&lt;Button endIcon="content_copy" /&gt;</p>
              <button className="btn">
                Default
                <span className="material-symbols-outlined right">
                  content_copy
                </span>
              </button>
            </div>

            <div className="btn-display icon-btn-spacing">
              <p>&lt;Button endIcon="skip_next" /&gt;</p>
              <button className="btn">
                Default
                <span className="material-symbols-outlined right">
                  skip_next
                </span>
              </button>
            </div>

          </div>

        </div>

        <h2 className="title">Button Sizes</h2>
        <div className="variants" id="size-variants">

          <div className="btn-display">
            <p>&lt;Button size="sm" /&gt;</p>
            <button className="btn size-btn" id="sm-btn">Default</button>
          </div>

          <div className="btn-display">
            <p>&lt;Button size="md" /&gt;</p>
            <button className="btn size-btn" id="md-btn">Default</button>
          </div>

          <div className="btn-display">
            <p>&lt;Button size="lg" /&gt;</p>
            <button className="btn size-btn" id="lg-btn">Default</button>
          </div>

        </div>

        <h2 className="title">Button Colors</h2>
        <div className="variants" id="color-variants">

          <div className="btn-display">
            <p>&lt;Button color="default" /&gt;</p>
            <button className="btn" id="normal-btn">Default</button>
          </div>

          <div className="btn-display">
            <p>&lt;Button color="primary" /&gt;</p>
            <button className="btn" id="primary-btn">Primary</button>
          </div>

          <div className="btn-display">
            <p>&lt;Button color="secondary" /&gt;</p>
            <button className="btn" id="secondary-btn">Secondary</button>
          </div>

          <div className="btn-display">
            <p>&lt;Button color="danger" /&gt;</p>
            <button className="btn" id="danger-btn">Danger</button>
          </div>

        </div>

      </main>

      <footer>
        <p>created by <a target="#_blank" href="https://www.linkedin.com/in/christos-durro-53b33320a/">Christos Durro</a> - <a target="#_blank" href="https://devchallenges.io/">devChallenges.io</a> </p>
      </footer>
    </div>
  );
}

export default App;
