import React from "react";
import axios from 'axios';

export default class UserPill extends React.Component {
    componentWillMount() {
        this.setState({profile: {}});
        axios.get("https://matrix.linuxgaming.life/_matrix/t2bot/user_profile", {params: {user_id: this.props.userId}})
            .then(response => {
                console.log(response.data);
                this.setState({profile: response.data});
            });
    }

    render() {
        const displayName = this.state.profile.displayname || this.props.userId;
        const avatarMxc = this.state.profile.avatar_url || "mxc://linuxgaming.life/OdOHSWJVvVJWgeLYFzSVWKpv";
        const avatarUrl = "https://matrix.linuxgaming.life/_matrix/media/r0/thumbnail/" + avatarMxc.split('?')[0].substring("mxc://".length) + "?width=120&height=120&animated=true";

        return (
            <a className="t2_UserPill" href={"https://matrix.to/#/" + this.props.userId} title={this.props.userId}>
                <img src={avatarUrl} className="t2_UserPill_avatar"/>
                <span className="t2_UserPill_displayName">{displayName}</span>
            </a>
        );
    }
}
