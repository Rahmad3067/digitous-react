import React from 'react';
const myCSS = {
	fontSize : "100",
	color : "black",
};

class Steps extends React.Component {
    render () {
        return (
            <div className="box col-sm-3 col-6">
                <span className="material-icons-outlined" style={myCSS}>
directions_walk
</span>
            </div>

        )
    }
}


export default Steps;