defmodule Plausible.ClickhouseRepo.Migrations.OneoExperimentsToEvents do
  use Ecto.Migration

  def up do
    execute """
      ALTER TABLE events ADD COLUMN io_exps Array(String);
    """
  end

  def down do
    execute """
      ALTER TABLE events DROP COLUMN io_exps;
    """
  end
end
