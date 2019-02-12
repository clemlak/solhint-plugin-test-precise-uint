class PreciseUint {
  constructor(reporter, config) {
    this.ruleId = 'precise-uint';

    this.reporter = reporter;
    this.config = config;
  }

  enterUint(ctx) {
    const identifier = ctx.children[1];
    const text = identifier.getText();

    if(text === 'Uint') {
      this.reporter.error(ctx, this.ruleId, 'Uint variables need to be more precise');
    }
  }
}

class NoFoosAllowed {
  constructor(reporter, config) {
    this.ruleId = 'no-foos'

    this.reporter = reporter
    this.config = config
  }

  enterContractDefinition(ctx) {
    const identifier = ctx.children[1]
    const text = identifier.getText()

    if (text === 'Foo') {
      this.reporter.error(ctx, this.ruleId, 'Contracts cannot be named "Foo"')
    }
  }
}

module.exports = [PreciseUint, NoFoosAllowed];
