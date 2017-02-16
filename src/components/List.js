import React from 'react';
import Item from './Item';

class List extends React.Component {
	render() {
		let items = this.props.items.map( (item) => {
			return (<Item key={item.id} {...item} onTodoClick={this.props.onTodoClick} />)
		});

		return (
			<ul style={{ listStyle: 'none' }}>
				{items}
			</ul>
		)
	}
}

export default List; 