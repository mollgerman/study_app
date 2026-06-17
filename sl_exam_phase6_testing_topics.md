# Phase 6 — Testing Python Code Topics and Keypoints
Source: `SL_W04IST_SI4034_lecture_10-testing.pdf`
Generated: 2026-06-17T11:54:51Z

## Floating-point arithmetic
- .1 + .1 + .1 == .3 is False
- Binary floats approximate many decimal fractions
- Use tolerance or pytest.approx for float tests

## Exact numeric alternatives
- Use Decimal with strings for exact decimal arithmetic
- Decimal(float) inherits float approximation
- Use Fraction for exact rational arithmetic

## Testing goals and strategies
- Prevent regressions
- Validate correctness
- Document behavior
- Static/dynamic/passive testing
- Unit/integration/acceptance levels

## pytest basics
- Install with pip install pytest
- Use assert
- Discovery: test_*.py and *_test.py
- Functions/methods starting with test

## Running and organizing tests
- pytest, pytest -q, pytest -v, run one file
- Class grouping starts with Test
- Keep tests separate from production code

## pytest exceptions and parametrization
- pytest.raises verifies expected exceptions
- @pytest.mark.parametrize creates multiple cases from one test

## Fixtures
- @pytest.fixture
- Pass fixture by parameter name
- tmp_path for temporary pathlib.Path directory
- yield enables teardown

## Mocking
- Use unittest.mock.patch
- Replace external dependencies
- No real HTTP call when requests.get is patched

## TDD
- Red-Green-Refactor
- Write tests before code
- Refactor without changing behavior
