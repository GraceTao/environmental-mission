import TextField from '@mui/material/TextField';
import { FormControl, FormLabel } from '@mui/material';
import { Box, Button} from "@mui/material";

export default function PolicyClue() {
    return (
        <Box position={{ top: "13vh", left: "70vw" }}>
            <FormControl>
                <FormLabel>Find the clue!</FormLabel>

                <TextField defaultValue="X">
                    inputProps={{ maxLength: 1 }}
                </TextField>
                <TextField defaultValue="X">
                    inputProps={{ maxLength: 1 }}
                </TextField>
                <TextField defaultValue="X">
                    inputProps={{ maxLength: 1 }}
                </TextField>
                <TextField defaultValue="X">
                    inputProps={{ maxLength: 1 }}
                </TextField>
                <TextField defaultValue="X">
                    inputProps={{ maxLength: 1 }}
                </TextField>
                <TextField defaultValue="X">
                    inputProps={{ maxLength: 1 }}
                </TextField>
                <Button>Submit</Button>
            </FormControl>
        </Box>
    )
}