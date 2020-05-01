import stuns from './stuns';
import turns from './turns';

interface IOptions {
  safe?: boolean
}

class OpenStuns {
  public STUN = stuns();
  public TURN = turns();
  private options: IOptions;
  constructor(opts?: IOptions) {
    // TODO : Make use of options
  }
}

export default OpenStuns;
