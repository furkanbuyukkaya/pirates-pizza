import LinkButton from '../../ui/LinkButton';

function EmptyCart() {
  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <p className="mt-7 font-semibold">
        Arrr, yer booty's as empty as a ghost ship! Start addin' some pizzas,
        and let the feastin' begin!
      </p>
    </div>
  );
}

export default EmptyCart;
