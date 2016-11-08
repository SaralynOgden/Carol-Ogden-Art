export default class SidebarCtrl {
  constructor() {
    this.status = false;
    this.direction = '>';
    this.left = '0';
    this.background = 'transparent';
  }

  transition() {
    this.status = !this.status;
    this.direction = this.direction === '<' ? '>':'<';
    this.left = this.left === '0' ? '15%':'0';
    this.background = this.background === 'transparent'? 'white':'transparent';
  }
};
