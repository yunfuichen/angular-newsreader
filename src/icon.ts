import { library } from '@fortawesome/fontawesome-svg-core';

import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons/faWhatsapp';
import { faLine } from '@fortawesome/free-brands-svg-icons/faLine';

const icons = [
  faFacebookF, faTwitter, faWhatsapp, faLine
];

library.add(...icons);