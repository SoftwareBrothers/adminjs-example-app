import { Box, H1, H2, H3, H4, H5, H6, Header, Text } from '@adminjs/design-system';
import React from 'react';

const TypographyPage = () => (
  <Box variant="grey" id="typography">
    <Header as="a" href="#typography">
      Typography
    </Header>
    <Box variant="container">
      <H1>This is H1 header</H1>
      <H2>This is H2 header</H2>
      <H3>This is H3 header</H3>
      <H4>This is H4 header</H4>
      <H5>This is H5 header</H5>
      <H6>This is H6 header</H6>
      <Header />

      <Text variant="lg">
        Sed tempus tempor dictum. Integer in lacus lacus. Curabitur sit amet ante eget ipsum finibus gravida. Donec
        viverra aliquet libero. Integer a nisl ac neque tempor pharetra. Donec sapien tortor, fermentum eu justo sed,
        egestas ultricies lacus. Pellentesque eget tincidunt nibh. Ut non lectus varius, semper lorem vel, porta orci.
        Duis id risus eu arcu efficitur bibendum. In eget eros ex. Integer et malesuada tellus.
      </Text>
      <Header />
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed venenatis semper massa a rhoncus. Praesent eu
        rutrum leo. Donec malesuada quis metus vel pulvinar. Quisque in vehicula nulla. Nam vestibulum facilisis lorem,
        ac mattis odio aliquet et. Suspendisse enim ligula, ultricies pellentesque ligula id, molestie sodales quam.
        Etiam in lectus ut nibh laoreet consequat.
      </Text>
      <Header />
      <Text variant="sm">
        Suspendisse efficitur, urna sit amet tempor dignissim, ex est feugiat ex, sed molestie ante erat eget dolor.
        Duis purus orci, commodo non semper sed, laoreet quis nisl. Donec a bibendum arcu. Donec eget justo nunc. Nunc
        elementum augue et bibendum molestie. Duis tincidunt pellentesque enim ac mattis. Nunc congue, ante id efficitur
        gravida, turpis velit porta nunc, at egestas urna odio eget arcu. Ut enim metus, fringilla eu risus eu, sodales
        venenatis lacus.
      </Text>
      <Header />
      <Text variant="xs">
        Donec vel malesuada turpis. Curabitur ultricies neque a sapien ullamcorper, quis faucibus felis porta. Etiam
        fermentum odio at rutrum pretium. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia curae; Suspendisse aliquet suscipit turpis at placerat. Cras quis sem vitae velit vehicula congue et nec
        libero. Curabitur aliquam, est id dapibus egestas, felis augue suscipit est, eu venenatis leo justo vel sapien.
        Donec id dignissim diam. Nulla feugiat ex sit amet augue sollicitudin pulvinar. Pellentesque id felis rhoncus,
        varius sem et, condimentum ligula. Proin accumsan sit amet nisl ac vehicula. Nulla facilisi. Ut pharetra vel
        tortor vel lacinia. Nulla sit amet neque lectus. Mauris tristique justo in sem tempus, at sagittis lectus
        molestie. Phasellus sit amet nulla id mi rutrum varius in eu nisi.
      </Text>
    </Box>
  </Box>
);

export default TypographyPage;
