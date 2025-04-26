import { Component } from "react";

import { StyledSticker } from "./StyledSticker.js";

export class Sticker extends Component {
  render() {
    return <StyledSticker>
			<button type="button" onClick={() => this.props.onStickerClick(this.props.label)}>
				<img src={this.props.img} alt={this.props.label}></img>
			</button>
		</StyledSticker>;
  }
}
