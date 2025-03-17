import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";

export default function TodoItem({ todo, fetchTodoDetail }) {
    return (
        <>
            <Card sx={{
                maxWidth: 350,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
            }}>
                <CardContent>
                    <Typography key={todo.id} variant="h5" color="text.secondary">
                        {todo.todo}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button
                        onClick={() => fetchTodoDetail(todo.id)}
                        sx={{
                            backgroundColor: "black",
                            color: "white",
                            opacity: '0.75',
                            '&:hover': {
                                backgroundColor: "black",
                                color: "white",
                                opacity: '1'
                            }
                        }} >Details</Button>
                </CardActions>
            </Card>
        </>
    )
}