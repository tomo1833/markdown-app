import { FC } from "react"
import { Chip, Stack } from "@mui/material";

import LocalOfferIcon from '@mui/icons-material/LocalOffer';

interface Props {
  tags: Array<String>;
}

/**
 * タグを表示.
 * @param props 
 * @returns 
 */
export const TagChip: FC<Props> = (props) => {

  const { tags } = props;

  return (
    <Stack direction="row" spacing={1}>
      {tags.map((label: String, index: number) => {
        return (
          <Chip key={index} label={label} color="secondary" icon={<LocalOfferIcon />} variant="outlined" />)
      })
      }
    </Stack>
  );
};