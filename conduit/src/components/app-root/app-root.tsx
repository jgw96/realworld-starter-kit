import { Component } from '@stencil/core';


@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css'
})
export class AppRoot {

  render() {
    return [
      <app-header></app-header>,

      <main>
        <stencil-router>
          <stencil-route-switch scrollTopOffset={0}>
            <stencil-route url='/' component='app-home' exact={true} />
            <stencil-route url='/profile/:name' component='app-profile' />
          </stencil-route-switch>
        </stencil-router>
      </main>,

      <footer>
        <div class="container">
          <a href="/" class="logo-font">conduit</a>
          <span class="attribution">
            An interactive learning project from <a href="https://thinkster.io">Thinkster</a>. Code &amp; design licensed under MIT.
        </span>
        </div>
      </footer>
    ];
  }
}
