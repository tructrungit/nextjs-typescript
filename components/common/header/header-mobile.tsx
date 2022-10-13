import { Box, Container, Link as MuiLink, Stack } from '@mui/material';
import Link from 'next/link';
import { ROUTE_LIST } from './routes';
import clsx from "clsx";
import { useRouter } from 'next/router';


export interface HeaderMobileProps {
}

export function HeaderMobile (props: HeaderMobileProps) {
  const router = useRouter();

  return (
    <Box display={{ xs: 'block', lg: 'none'}}>
        <Container>
        <Stack direction="row" justifyContent="space-around">
          {ROUTE_LIST.map((route) => (
            <Link key={route.path} href={route.path} passHref>
              <MuiLink
                sx={{ ml: 2 }}
                className={clsx({ active: router.pathname === route.path })}
              >
                {route.label}
              </MuiLink>
            </Link>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
