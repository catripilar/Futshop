import React from 'react';
import { ListItem, ListItemText } from '@material-ui/core/';
const Item = (procs) => {
    return(
        <ListItem>
            <ListItemText style={{color:'#32CD32',textTransform:'uppercase'}} primary={procs.name} secondary={procs.details}/>
        </ListItem>
    )
}
export default Item;
