import React from "react";
import { Spinner } from "react-bootstrap";

function Loading(props) {

    const { loading, children, config } = props

    const styles = {
        spinner: {
            position: "fixed",
            top: "50%",
            left: "50%"
        }
    }

    if (loading) {
        return (
            <div>
                <Spinner style={styles.spinner} animation={config?.animation || "grow"} variant={config?.variant || "dark"} />
            </div>
        )
    }

    return (<>
        {children}
    </>
    )

}

export default Loading