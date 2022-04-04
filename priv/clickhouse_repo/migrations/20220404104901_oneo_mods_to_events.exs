defmodule Plausible.ClickhouseRepo.Migrations.OneoModsToEvents do
  use Ecto.Migration

  use Ecto.Migration

  def up do
    execute """
      ALTER TABLE events ADD COLUMN io_mods Array(String);
    """
  end

  def down do
    execute """
      ALTER TABLE events DROP COLUMN io_mods;
    """
  end
end
